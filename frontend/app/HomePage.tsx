export default async function HomePage() {
  try {
    const response = await fetch("http://10.103.28.172:3050", {
      cache: "no-store",
    });
    const data = await response.json();
    return <div>Data: {data?.result}</div>;
  } catch (error) {
    console.error("Error occurred: " + error);
    return (
      <div>
        <p>Error Occurred: {JSON.stringify(error)}</p>
      </div>
    );
  }
}
