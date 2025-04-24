import { External$Mandate, Mandate, Schemas$Mandate } from "./mandate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InboundTransfersPaymentMethodDetailsUsBankAccount = {
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
   * The network rails used. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
   */
  network: "ach";
  /**
   * Routing number of the bank account.
   */
  routingNumber?: string | null | undefined;
};

/**
 * @internal
 * InboundTransfersPaymentMethodDetailsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InboundTransfersPaymentMethodDetailsUsBankAccount = {
  account_holder_type?: ("company" | "individual") | null | undefined;
  account_type?: ("checking" | "savings") | null | undefined;
  bank_name?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  mandate?: (string | External$Mandate) | undefined;
  network: "ach";
  routing_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InboundTransfersPaymentMethodDetailsUsBankAccount
 */
const SchemaIn$InboundTransfersPaymentMethodDetailsUsBankAccount: z.ZodType<
  InboundTransfersPaymentMethodDetailsUsBankAccount, // output type of this zod object
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
    network: z.enum(["ach"]),
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
      network: "network",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InboundTransfersPaymentMethodDetailsUsBankAccount
 */
const SchemaOut$InboundTransfersPaymentMethodDetailsUsBankAccount: z.ZodType<
  External$InboundTransfersPaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  InboundTransfersPaymentMethodDetailsUsBankAccount // the object to be transformed
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
    network: z.enum(["ach"]),
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
      network: "network",
      routingNumber: "routing_number",
    });
  });

export const Schemas$InboundTransfersPaymentMethodDetailsUsBankAccount = {
  in: SchemaIn$InboundTransfersPaymentMethodDetailsUsBankAccount,
  out: SchemaOut$InboundTransfersPaymentMethodDetailsUsBankAccount,
};
