import {
  Button,
  Card,
  CardContent,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Switch,
  Textarea,
} from "@/components/shared/ui";
import { createOneSeries, updateOneSeries } from "@/services/series.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import * as z from "zod";

interface IOneSeriesFormProps {
  data?: FormSchema;
  id?: string;
  isNew?: boolean;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Назва повинна містити не менше 2 символів",
  }),
  description: z.optional(
    z.string().min(10, {
      message: "Опис повинен містити не менше 10 символів",
    })
  ),
  exclusive: z.boolean(),
  imageURL: z.string().url({
    message: "Будь ласка, введіть коректний URL зображення",
  }),
});
export type FormSchema = z.infer<typeof formSchema>;
export const OneSeriesForm = ({
  isNew = true,
  data,
  id,
}: IOneSeriesFormProps) => {
  const initialFormData = {
    title: "",
    exclusive: false,
    imageURL: "",
  };
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: data || initialFormData,
  });
  const navigate = useNavigate();

  const onSubmit = async (values: FormSchema) => {
    try {
      if (isNew) {
        const success = await createOneSeries(values);
        if (success) {
          toast("Серіал успішно додано");
          navigate("/series");
        }
      } else {
        const success = await updateOneSeries(id!, values);
        if (success) {
          toast("Серіал успішно оновлено");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        {isNew ? "Додати новий серіал" : "Редагувати серіал"}
      </h1>
      <Card>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Назва</FormLabel>
                    <FormControl>
                      <Input placeholder="Введіть назву серіалу" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Опис</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Введіть опис серіалу"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="exclusive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Ексклюзив</FormLabel>
                      <FormDescription>
                        Позначте, якщо серіал є ексклюзивним
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Посилання на зображення</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com/image.jpg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button type="button" variant="outline" asChild>
                  <Link to="/series">Скасувати</Link>
                </Button>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {isNew ? " Створення..." : "Оновлення..."}
                    </>
                  ) : isNew ? (
                    "Створити серіал"
                  ) : (
                    "Оновити серіал"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
