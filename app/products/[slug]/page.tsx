import { products } from "@/lib/product-data"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductInquiryDialog } from "@/components/product-inquiry-dialog" // Import the new dialog

// Generate static params for all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound() // Render 404 page if product not found
  }

  // Filter out the current product to show related ones
  const relatedProducts = products.filter((p) => p.slug !== params.slug).slice(0, 4) // Show up to 4 related products

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex justify-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-blue-900">{product.name}</h1>
            <p className="text-lg text-gray-700 leading-relaxed">{product.details.overview}</p>

            {product.details.features && product.details.features.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-blue-800">Key Features</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.details.specifications && Object.keys(product.details.specifications).length > 0 && (
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-blue-800">Specifications</h2>
                <ul className="text-gray-600 space-y-1">
                  {Object.entries(product.details.specifications).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {/* Use the new ProductInquiryDialog component */}
              <ProductInquiryDialog productName={product.name} />
              <Link href="/#products" passHref>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-6 py-3 rounded-md bg-transparent"
                >
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16 py-8 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {relatedProducts.map((relatedProduct, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
                >
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={200}
                    height={150}
                    className="rounded-md mb-4 object-cover"
                  />
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-xl font-semibold text-blue-900">{relatedProduct.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-gray-600 text-sm mb-4">
                    <CardDescription>{relatedProduct.description}</CardDescription>
                  </CardContent>
                  <Link href={`/products/${relatedProduct.slug}`} passHref>
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
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
