import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
// import { ActionState } from "./form/utils/to-action-state";
import { AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import { cloneElement, ReactElement, useActionState, useState } from "react";
import { SubmitButton } from "./form/submit-button";
import { Form } from "./form/form";
import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/to-action-state";

type InteractiveElement = ReactElement<{ onClick?: () => void }>;

type UseConfirmDialogProps = {
  title?: string;
  description?: string;
  action: (prevState: ActionState, payload: FormData) => Promise<ActionState>;
  trigger: InteractiveElement;
};

const useConfirmDialog = ({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. Make sure you understand the consequences",
  action,
  trigger,
}: UseConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((state) => !state),
  });

  const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

  const handleSuccess = () => {
    setIsOpen(false);
  };

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={formAction}
              actionState={actionState}
              onSuccess={handleSuccess}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  return [dialogTrigger, dialog];
};

export { useConfirmDialog };
