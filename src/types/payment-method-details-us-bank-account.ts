import { External$Mandate, Mandate, Schemas$Mandate } from "./mandate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsUsBankAccount = {
  /**
   * Account holder type: individual or company.
   */
  accountHolderType?: ("company" | "individual") | null | undefined;
  /**
   * Account type: checkings or savings. Defaults to checking if omitted.
   */
  accountType?: ("checking" | "savings") | null | undefined;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  /**
   * ID of the mandate used to make this payment.
   */
  mandate?: (string | Mandate) | undefined;
  /**
   * Reference number to locate ACH payments with customer's bank.
   */
  paymentReference?: string | null | undefined;
  /**
   * Routing number of the bank account.
   */
  routingNumber?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsUsBankAccount = {
  account_holder_type?: ("company" | "individual") | null | undefined;
  account_type?: ("checking" | "savings") | null | undefined;
  bank_name?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  mandate?: (string | External$Mandate) | undefined;
  payment_reference?: string | null | undefined;
  routing_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsUsBankAccount
 */
const SchemaIn$PaymentMethodDetailsUsBankAccount: z.ZodType<
  PaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_type: z
      .enum(["company", "individual"])
      .nullable()
      .optional(),
    account_type: z.enum(["checking", "savings"]).nullable().optional(),
    bank_name: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.union([z.string(), z.lazy(() => Schemas$Mandate.in)]).optional(),
    payment_reference: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_type: "accountHolderType",
      account_type: "accountType",
      bank_name: "bankName",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate: "mandate",
      payment_reference: "paymentReference",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsUsBankAccount
 */
const SchemaOut$PaymentMethodDetailsUsBankAccount: z.ZodType<
  External$PaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsUsBankAccount // the object to be transformed
> = z
  .object({
    accountHolderType: z.enum(["company", "individual"]).nullable().optional(),
    accountType: z.enum(["checking", "savings"]).nullable().optional(),
    bankName: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z
      .union([z.string(), z.lazy(() => Schemas$Mandate.out)])
      .optional(),
    paymentReference: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderType: "account_holder_type",
      accountType: "account_type",
      bankName: "bank_name",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate: "mandate",
      paymentReference: "payment_reference",
      routingNumber: "routing_number",
    });
  });

export const Schemas$PaymentMethodDetailsUsBankAccount = {
  in: SchemaIn$PaymentMethodDetailsUsBankAccount,
  out: SchemaOut$PaymentMethodDetailsUsBankAccount,
};
