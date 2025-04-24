import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountBacsDebitPaymentsSettings = {
  /**
   * The Bacs Direct Debit display name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. The fee appears 5 business days after requesting Bacs. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
   */
  displayName?: string | null | undefined;
  /**
   * The Bacs Direct Debit Service user number for this account. For payments made with Bacs Direct Debit, this number is a unique identifier of the account with our banking partners.
   */
  serviceUserNumber?: string | null | undefined;
};

/**
 * @internal
 * AccountBacsDebitPaymentsSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBacsDebitPaymentsSettings = {
  display_name?: string | null | undefined;
  service_user_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBacsDebitPaymentsSettings
 */
const SchemaIn$AccountBacsDebitPaymentsSettings: z.ZodType<
  AccountBacsDebitPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_name: z.string().nullable().optional(),
    service_user_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_name: "displayName",
      service_user_number: "serviceUserNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBacsDebitPaymentsSettings
 */
const SchemaOut$AccountBacsDebitPaymentsSettings: z.ZodType<
  External$AccountBacsDebitPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountBacsDebitPaymentsSettings // the object to be transformed
> = z
  .object({
    displayName: z.string().nullable().optional(),
    serviceUserNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayName: "display_name",
      serviceUserNumber: "service_user_number",
    });
  });

export const Schemas$AccountBacsDebitPaymentsSettings = {
  in: SchemaIn$AccountBacsDebitPaymentsSettings,
  out: SchemaOut$AccountBacsDebitPaymentsSettings,
};
