<<<<<<< HEAD
=======
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
>>>>>>> 306bc0e (commit coba)
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Carts from "./pages/Carts";
import Post from "./pages/Post";
import Product from "./pages/Product";
import Recipes from "./pages/Recipes";
<<<<<<< HEAD


function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<RootLayout/>}>
			<Route index element={<Product/>}/>	
			<Route path="recipes" element={<Recipes/>}/>	
			<Route path="posts" element={<Post/>}/>	
			<Route path="carts" element={<Carts/>}/>	
=======
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const queryClient = new QueryClient()

function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home/>} />
			<Route path="product" element={<Product />} />
			<Route path="product/add" element={<AddProduct />} />
			<Route path="product/:id" element={<ProductDetail/>}/>
			<Route path="product/:id/edit" element={<EditProduct/>}/>
			<Route path="recipes" element={<Recipes />} />
			<Route path="posts" element={<Post />} />
			<Route path="carts" element={<Carts />} />
>>>>>>> 306bc0e (commit coba)
		</Route>
	));
	return (
		<>
<<<<<<< HEAD
		<RouterProvider router={router}/>
=======
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
>>>>>>> 306bc0e (commit coba)
		</>
	)
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 306bc0e (commit coba)
