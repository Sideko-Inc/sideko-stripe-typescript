import {
  External$PaymentLinkCreateBodyAfterCompletionHostedConfirmation,
  PaymentLinkCreateBodyAfterCompletionHostedConfirmation,
  Schemas$PaymentLinkCreateBodyAfterCompletionHostedConfirmation,
} from "./payment-link-create-body-after-completion-hosted-confirmation";
import {
  External$PaymentLinkCreateBodyAfterCompletionRedirect,
  PaymentLinkCreateBodyAfterCompletionRedirect,
  Schemas$PaymentLinkCreateBodyAfterCompletionRedirect,
} from "./payment-link-create-body-after-completion-redirect";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Behavior after the purchase is complete.
 */
export type PaymentLinkCreateBodyAfterCompletion = {
  hostedConfirmation?:
    | PaymentLinkCreateBodyAfterCompletionHostedConfirmation
    | undefined;
  redirect?: PaymentLinkCreateBodyAfterCompletionRedirect | undefined;
  type: "hosted_confirmation" | "redirect";
};

/**
 * @internal
 * PaymentLinkCreateBodyAfterCompletion without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyAfterCompletion = {
  hosted_confirmation?:
    | External$PaymentLinkCreateBodyAfterCompletionHostedConfirmation
    | undefined;
  redirect?: External$PaymentLinkCreateBodyAfterCompletionRedirect | undefined;
  type: "hosted_confirmation" | "redirect";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyAfterCompletion
 */
const SchemaIn$PaymentLinkCreateBodyAfterCompletion: z.ZodType<
  PaymentLinkCreateBodyAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_confirmation:
      Schemas$PaymentLinkCreateBodyAfterCompletionHostedConfirmation.in.optional(),
    redirect:
      Schemas$PaymentLinkCreateBodyAfterCompletionRedirect.in.optional(),
    type: z.enum(["hosted_confirmation", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hosted_confirmation: "hostedConfirmation",
      redirect: "redirect",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyAfterCompletion
 */
const SchemaOut$PaymentLinkCreateBodyAfterCompletion: z.ZodType<
  External$PaymentLinkCreateBodyAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyAfterCompletion // the object to be transformed
> = z
  .object({
    hostedConfirmation:
      Schemas$PaymentLinkCreateBodyAfterCompletionHostedConfirmation.out.optional(),
    redirect:
      Schemas$PaymentLinkCreateBodyAfterCompletionRedirect.out.optional(),
    type: z.enum(["hosted_confirmation", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedConfirmation: "hosted_confirmation",
      redirect: "redirect",
      type: "type",
    });
  });

export const Schemas$PaymentLinkCreateBodyAfterCompletion = {
  in: SchemaIn$PaymentLinkCreateBodyAfterCompletion,
  out: SchemaOut$PaymentLinkCreateBodyAfterCompletion,
};
