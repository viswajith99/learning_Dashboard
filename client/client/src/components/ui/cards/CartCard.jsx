export const CartCard = ({ course }) => {
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
         <img className="w-full h-64 object-cover" src={course?.image} alt={course?.title} />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{course?.title}</h1>
       
          
          <div className="flex justify-between items-center mb-4">
          
            <span className="text-gray-900 font-semibold text-lg">Price: ${course?.price}</span>
          </div>
          
          {/* Container for buttons with gap */}
          <div className="flex space-x-4">
          
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              PAY
            </button>
          </div>
        </div>
      </div>
    );
  };
  