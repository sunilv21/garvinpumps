import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link" // Import Link
import { products } from "@/lib/product-data" // Import product data

export function ProductsSection() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Products</h2>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={150}
                className="rounded-md mb-4 object-cover"
              />
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-xl font-semibold text-blue-900">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-gray-600 text-sm mb-4">
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <Link href={`/products/${product.slug}`} passHref>
                <Button
                  variant="default"
                  className="mt-auto hover:bg-green-600 transition-colors duration-300 bg-slate-100 text-black"
                >
                  View Details
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
