function ErrorPage () {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-5xl font-['Plus_Jakarta_Sans'] font-bold text-[#4B6BFB] mb-4">404 - Page Not Found</h1>
            <p className="text-[#ee6a80] font-['Plus_Jakarta_Sans'] text-lg mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <div className="max-w-md w-full">
                <img src="/assets/notFound.svg" alt="404 Error" loading="lazy" className="w-full h-auto" />
            </div>
        </section>
    )
}

export default ErrorPage;