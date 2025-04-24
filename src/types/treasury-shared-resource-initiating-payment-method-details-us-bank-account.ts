import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount =
  {
    /**
     * Bank name.
     */
    bankName?: string | null | undefined;
    /**
     * The last four digits of the bank account number.
     */
    last4?: string | null | undefined;
    /**
     * The routing number for the bank account.
     */
    routingNumber?: string | null | undefined;
  };

/**
 * @internal
 * TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount =
  {
    bank_name?: string | null | undefined;
    last4?: string | null | undefined;
    routing_number?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount
 */
const SchemaIn$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount: z.ZodType<
  TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_name: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_name: "bankName",
      last4: "last4",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount
 */
const SchemaOut$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount: z.ZodType<
  External$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount // the object to be transformed
> = z
  .object({
    bankName: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankName: "bank_name",
      last4: "last4",
      routingNumber: "routing_number",
    });
  });

export const Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount =
  {
    in: SchemaIn$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount,
    out: SchemaOut$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount,
  };
