import { Road } from "../../types";

export type DrawerProps = {
    open: boolean;
    selectedRoad: Road | null;
    closeDrawer: () => void
}