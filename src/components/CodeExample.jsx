export default function CodeExample() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Code Example</h2>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-auto text-sm">
        <code>
          {`function multiply(a, b) {
  return a * b;
}`}
        </code>
      </pre>
    </section>
  )
}
