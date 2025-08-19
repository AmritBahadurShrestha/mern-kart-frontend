
const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
            <p className="mt-2 text-gray-500">The page you are looking for doesn't exist.</p>
        </div>
    )
}

export default PageNotFound
