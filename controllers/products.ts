import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import { Product } from "../types.ts";


let products: Product[] = [
    {
        id: '1',
        name: 'test product 1',
        description: 'test product description 1',
        price: 29.99,
    },
    {
        id: '2',
        name: 'test product 2',
        description: 'test product description 2',
        price: 39.99,
    },
    {
        id: '3',
        name: 'test product 3',
        description: 'test product description 3',
        price: 65.99,
    },
    {
        id: '4',
        name: 'test product 4',
        description: 'test product description 4',
        price: 44.99,
    },
];

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = ({ response }: { response: any }) => {
    response.body = {
        status: true,
        data: products
    }
}

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {
    const product: Product | undefined = products.find((item: Product) => item.id === params.id);
    if (product){
        response.status = 200;
        response.body = {
            status: true,
            data: product
        };
    } else {
        response.status = 404;
        response.body = {
            status: false,
            message: 'Product not found'
        };
    }
}

// @desc    Create product
// @route   POST /api/v1/products
const addProduct = async ({ request, response }: { request: any, response: any }) => {
    const body: { value: Product } = await request.body();
    console.log(body.value);
    if (!request.hasBody){
        response.status = 404;
        response.body = {
            status: false,
            message: 'No data'
        };
    } else {
        const product: Product = body.value;
        product.id = v4.generate();
        products.push(product);

        response.status = 201;
        response.body = {
            status: true,
            data: product
        }
    }
}

// @desc    Update products
// @route   PUT /api/v1/products/:id
const updateProduct = async ({ request, response }: { request: any, response: any }) => {
    response.body = 'Update';

}

// @desc    Delete products
// @route   DELETE /api/v1/products/:id
const deleteProduct = ({ response }: { response: any }) => {
    response.body = 'Delete';
}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
