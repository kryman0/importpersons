export default function MainLayout({
    children,
    }: Readonly<{children: React.ReactNode}>) {
    
    return (
        <main className="row-2 flex-auto">
            {children}
        </main>
    );
}
