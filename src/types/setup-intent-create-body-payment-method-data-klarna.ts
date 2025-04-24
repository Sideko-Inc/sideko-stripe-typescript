import {
  External$SetupIntentCreateBodyPaymentMethodDataKlarnaDob,
  Schemas$SetupIntentCreateBodyPaymentMethodDataKlarnaDob,
  SetupIntentCreateBodyPaymentMethodDataKlarnaDob,
} from "./setup-intent-create-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataKlarna
 */
export type SetupIntentCreateBodyPaymentMethodDataKlarna = {
  dob?: SetupIntentCreateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataKlarna = {
  dob?: External$SetupIntentCreateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataKlarna
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataKlarna: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$SetupIntentCreateBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataKlarna
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataKlarna: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$SetupIntentCreateBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataKlarna = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataKlarna,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataKlarna,
};
