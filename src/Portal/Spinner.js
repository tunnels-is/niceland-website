import Loader from "react-spinners/SquareLoader";

const Spinner = () => {
    return (
        <Loader
            className="spinner"
            loading={true}
            color={"#202324"}
            size={50}
        />
    )

}

export default Spinner;