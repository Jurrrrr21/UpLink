export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-3 py-9 lg:px-8">
                <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">Up<span className="text-gray-900">Link</span></p>
                    <p className="mt-4 text-sm text-gray-500">
                        © {new Date().getFullYear()} UpLink. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
