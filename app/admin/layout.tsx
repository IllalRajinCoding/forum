export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="border-b border-gray-300">
            <h1>Admin Layout</h1>
            {children}
        </div>
    );
}