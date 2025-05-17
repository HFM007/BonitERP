import Layout from "../layout/layout";

export default function IndexProduct() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] bg-base-100 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Product 1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product 1</h2>
              <p className="text-sm">Description of Product 1</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}