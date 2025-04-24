import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountSepaDebitPaymentsSettings = {
  /**
   * SEPA creditor identifier that identifies the company making the payment.
   */
  creditorId?: string | undefined;
};

/**
 * @internal
 * AccountSepaDebitPaymentsSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSepaDebitPaymentsSettings = {
  creditor_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSepaDebitPaymentsSettings
 */
const SchemaIn$AccountSepaDebitPaymentsSettings: z.ZodType<
  AccountSepaDebitPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    creditor_id: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditor_id: "creditorId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSepaDebitPaymentsSettings
 */
const SchemaOut$AccountSepaDebitPaymentsSettings: z.ZodType<
  External$AccountSepaDebitPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountSepaDebitPaymentsSettings // the object to be transformed
> = z
  .object({
    creditorId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditorId: "creditor_id",
    });
  });

export const Schemas$AccountSepaDebitPaymentsSettings = {
  in: SchemaIn$AccountSepaDebitPaymentsSettings,
  out: SchemaOut$AccountSepaDebitPaymentsSettings,
};
