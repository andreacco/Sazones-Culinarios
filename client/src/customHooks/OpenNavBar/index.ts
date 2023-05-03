import { useState } from "react";

const openNavBar = (status: any) => {
    const [open, setOpen] = useState<boolean>(false);
    if (status) {
        setOpen(status)
        return open
    }
    else {
        return open
    }
    // setOpen(status)

}
export default openNavBar;

