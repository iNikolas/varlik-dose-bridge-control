import { createEffect } from "effector";
import { toast } from "react-toastify";

import { extractErrorMessage } from "@/utils";

export const showSuccessfullMessageFx = createEffect((message: string) => {
  toast.success(message);
});

export const showErrorMessageFx = createEffect((e: Error) => {
  toast.error(extractErrorMessage(e));
});
