import {
  External$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob,
  SetupIntentConfirmBodyPaymentMethodDataKlarnaDob,
} from "./setup-intent-confirm-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataKlarna
 */
export type SetupIntentConfirmBodyPaymentMethodDataKlarna = {
  dob?: SetupIntentConfirmBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataKlarna = {
  dob?: External$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataKlarna
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataKlarna: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataKlarna
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataKlarna: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarna = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataKlarna,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataKlarna,
};
