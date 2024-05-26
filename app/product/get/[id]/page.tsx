const Page = ({ params }: { params: { id: string } }) => {
    return (
        <div className="min-h-screen flex justify-center items-center gap-2 flex-wrap">
            <h1>Hello, {params.id}!</h1>
        </div>
    );
};

export default Page;
