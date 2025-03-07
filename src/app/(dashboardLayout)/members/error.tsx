"use client"
interface ErrorProps{
    error:string;
    reset:()=>void
}
const error = ({error,reset}:ErrorProps) => {
    return (
        <div>
            <h1>{error}</h1>
            <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
        </div>
    );
};

export default error;