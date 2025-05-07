import Main from '@/app/(main)/layout';

export default function Home({children}) {
    return (
    <div className="flex grid grid-cols-1 grid-rows-3">
        <Main>{children}</Main>
    </div>
    );
}
