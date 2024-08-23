import Card from "@/components/ui/Сard/Card";
import {CardItem} from "@/lib/utils/CardProps";
import {FC} from "react";

const DataView: FC<{ list: CardItem[] | null, title: string }> = ({list, title}) => {
    return (
        <div className="sm:mt-16 w-full min-h-screen md:ml-[1vw]">
            {list && list.length === 0 ?
                <span className="text-red-500 md:text-xl">Фільмів за вашими даними немає</span>
                :
                <div className="h-full w-full">
                    <h1 className="flex sm:text-xl lg:text-2xl justify-center text-primaryText">{title}</h1>
                    <ul className="sm:mx-[6vw] md:mx-0 grid sm:grid-cols-2 sm:gap-[4vw] md:grid-cols-3  lg:grid-cols-4 md:gap-[2vw] lg:gap-0 lg:gap-x-[1vw] lg:gap-y-10 sm:mt-10 lg:mt-5">
                        {list!.map((item) => {
                            return <li key={item.id}>
                                <Card item={item}/>
                            </li>
                        })}
                    </ul>
                </div>
            }
        </div>
    );
};

export default DataView;