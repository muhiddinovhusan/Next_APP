const Pagination = ({ currentPage, totalPages, onPageChange } : {
    currentPage:number , totalPages : number, onPageChange:any
}) => {
    return (
      <div className="flex  justify-center mt-10 overflow-hidden">
        <nav>
          <ul className="flex  gap-4 ">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`${index + 1 === currentPage ? 'active' : ''}`}>
                <a href="#" className="  " onClick={() => onPageChange(index + 1)}>
                 <h2 className="">
                  {index + 1}
                 </h2>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };
  

  export default Pagination