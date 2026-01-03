export default function Dashboard() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-3xl font-bold mb-4 text-blue-500">Admin Dashboard</h1>
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                <p className="text-zinc-400">Welcome to the secure admin area.</p>
                <div className="mt-4 p-4 bg-green-900/20 border border-green-900 rounded text-green-400">
                    Authentication Successful
                </div>
            </div>
        </div>
    );
}
