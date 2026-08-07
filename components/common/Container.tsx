/**
 * Container Component
 *
 * This component keeps all pages aligned
 * with the same maximum width.
 */

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {children}
    </div>
  );
}