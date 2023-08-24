

export default function Page({ params }: { params: { Products: string } }) {
    return <div>My Post: {params.Products}</div>
}