import Link from "next/link";

const ChildPageLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <>
      <div className="mb-3">
        <Link href="/" className="btn btn-outline-secondary btn-sm">
          Back
        </Link>
      </div>

      {children}
    </>
  );
};

export default ChildPageLayout;

