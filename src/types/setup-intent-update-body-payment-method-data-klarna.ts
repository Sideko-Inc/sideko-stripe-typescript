import {
  External$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob,
  SetupIntentUpdateBodyPaymentMethodDataKlarnaDob,
} from "./setup-intent-update-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataKlarna
 */
export type SetupIntentUpdateBodyPaymentMethodDataKlarna = {
  dob?: SetupIntentUpdateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataKlarna = {
  dob?: External$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataKlarna
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataKlarna: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataKlarna
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataKlarna: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarna = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataKlarna,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataKlarna,
};
