import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAchCreditTransfer = {
  /**
   * Account number to transfer funds to.
   */
  accountNumber?: string | null | undefined;
  /**
   * Name of the bank associated with the routing number.
   */
  bankName?: string | null | undefined;
  /**
   * Routing transit number for the bank account to transfer funds to.
   */
  routingNumber?: string | null | undefined;
  /**
   * SWIFT code of the bank associated with the routing number.
   */
  swiftCode?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAchCreditTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAchCreditTransfer = {
  account_number?: string | null | undefined;
  bank_name?: string | null | undefined;
  routing_number?: string | null | undefined;
  swift_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAchCreditTransfer
 */
const SchemaIn$PaymentMethodDetailsAchCreditTransfer: z.ZodType<
  PaymentMethodDetailsAchCreditTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
    swift_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number: "accountNumber",
      bank_name: "bankName",
      routing_number: "routingNumber",
      swift_code: "swiftCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAchCreditTransfer
 */
const SchemaOut$PaymentMethodDetailsAchCreditTransfer: z.ZodType<
  External$PaymentMethodDetailsAchCreditTransfer, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAchCreditTransfer // the object to be transformed
> = z
  .object({
    accountNumber: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
    swiftCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumber: "account_number",
      bankName: "bank_name",
      routingNumber: "routing_number",
      swiftCode: "swift_code",
    });
  });

export const Schemas$PaymentMethodDetailsAchCreditTransfer = {
  in: SchemaIn$PaymentMethodDetailsAchCreditTransfer,
  out: SchemaOut$PaymentMethodDetailsAchCreditTransfer,
};
