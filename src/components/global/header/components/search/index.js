// dependencies
import Image from "next/image";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";

// images
import SearchIcon from "@/images/components/header/icons/search.svg";

function HeaderSearch() {
    return (
        <>
            <IconButton>
                <Image
                    src={SearchIcon}
                    width={22}
                    height={22}
                    alt="Search Icon"
                    className="filter-light-green"
                />
            </IconButton>
        </>
    );
}

export default HeaderSearch;
