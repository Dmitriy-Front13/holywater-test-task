interface ILoadingStateProps {
  message: string;
}
export const LoadingState = ({ message }: ILoadingStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div className="h-16 w-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      <p className="text-sm text-muted-foreground">Завантаження {message}...</p>
    </div>
  );
};
