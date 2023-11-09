
const Blog = () => {
    return (
        <div className="">

            <div>
                <h2 className="text-5xl text-center pt-10 font-bold"><span className="text-primary">Res</span>tho Blog</h2>
            </div>

<div className="my-20 mx-auto">

<div className="mx-auto border px-20 py-8 bg w-[1200px] bg-slate-50" >
            <ol className="space-y-4 text-black list-decimal list-inside dark:text-gray-400">
   <li>
 
  <h2 className="text-xl font-bold">  Question: What is One way data binding?</h2>

      <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
      <li>Answer:</li>
      <p>One-way data binding is a unidirectional flow of data, where the data is transferred from the model  to the view  but not the other way around. Changes in the model automatically update the view, ensuring a consistent and predictable data flow. It simplifies the application architecture, making it easier to understand and maintain. This approach is commonly associated with frameworks like React, where the virtual DOM efficiently updates the actual DOM based on changes in the application state.</p>
        
      </ul>
   </li>
   <li>
  
   <h2 className="text-xl font-bold"> Question: What is NPM in node.js?</h2>

      <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
      <li>Answer:</li>
      <p>NPM (Node Package Manager) in Node.js is a package manager that facilitates the installation, sharing, and management of third-party JavaScript libraries and tools. It comes bundled with Node.js and allows developers to easily add, update, and remove packages in their Node.js projects. NPM provides access to a vast ecosystem of open-source packages and simplifies dependency management, making it an essential tool for Node.js developers.</p>
      
      </ul>
   </li>

   <li>
    <h2 className="text-xl font-bold">Question:Different between Mongodb database vs mySQL database.</h2>
      <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
         <li>Answer:</li>
         <p>
1.Data Model:   
MongoDB: MongoDB is a NoSQL, document-oriented database. It stores data in flexible, JSON-like BSON documents. Each document can have a different structure, allowing for dynamic and schema-less data.
MySQL: MySQL is a relational database management system (RDBMS) that uses structured tables with rows and columns. It enforces a predefined schema where each table has a fixed set of columns.
<br /><br />

2.Schema:
MongoDB: MongoDB is schema-less, meaning that documents within a collection can have different fields. This flexibility is well-suited for applications where the data structure evolves over time.
MySQL: MySQL is schema-based, and tables must adhere to a defined schema. Changes to the schema may require altering the table structure, making it more rigid compared to MongoDB.
<br /><br />

3.Query Language:

MongoDB: MongoDB uses a rich and powerful query language that includes support for complex queries, indexing, and aggregation. It also supports geospatial queries and full-text search.
MySQL: MySQL uses SQL (Structured Query Language) for querying and managing data. SQL provides a standardized way to interact with relational databases.
<br /><br />

4.Scalability:

MongoDB: MongoDB is designed to scale horizontally by sharding data across multiple servers. This makes it well-suited for handling large amounts of unstructured or semi-structured data.
MySQL: MySQL traditionally scales vertically by adding more resources (CPU, RAM) to a single server. While there are solutions for horizontal scaling, it's not as straightforward as in MongoDB.
<br /><br />

5.ACID Compliance:

MongoDB: MongoDB sacrifices some aspects of ACID compliance (Atomicity, Consistency, Isolation, Durability) for the sake of scalability and flexibility.
MySQL: MySQL is known for strong ACID compliance, making it a good choice for applications where data integrity is critical.
<br /><br />

6.Use Cases:

MongoDB: MongoDB is often chosen for projects with evolving or unpredictable schemas, real-time applications, and scenarios requiring high scalability, such as content management systems or big data applications.
MySQL: MySQL is commonly used in traditional relational database scenarios where data has a well-defined structure, such as e-commerce platforms, financial applications, and data warehousing.
Choosing between MongoDB and MySQL depends on the specific requirements of the project, the nature of the data, and scalability needs. Each database has its strengths and weaknesses, and the choice often comes down to the characteristics of the application being developed.




</p>
         
      </ul>
   </li>
</ol>
            </div>
</div>



 

            




         
        </div>
    );
};

export default Blog;