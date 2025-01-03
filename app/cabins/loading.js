import Spinner from "@/app/_components/Spinner";
import SpinnerMini from "@/app/_components/SpinnerMini";

export default function Loading() {
    return (
        <div className={"grid items-center justify-center"}>
            <Spinner/>
            <p className={"text-xl text-primary-200"}>Loading Cabin data...</p>
        </div>
    )
}
