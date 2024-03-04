import { MouseEvent, Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleListItemClick = (
    e: MouseEvent<HTMLLIElement>,
    router: AppRouterInstance,
    clickToScroll: boolean,
    setClickToScroll: Dispatch<SetStateAction<boolean>>,
    setActiveLink: Dispatch<SetStateAction<string>>
) => {
    e.preventDefault();
    const pathname = `/#${e.currentTarget.textContent?.toLowerCase()}`;
    setClickToScroll(true);
    if (clickToScroll) {
        // setActiveLink(pathname);
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    router.replace(pathname);

    setClickToScroll(false);
};
