import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeAchCreditTransfer
 */
export type SourceTypeAchCreditTransfer = {
  accountNumber?: string | null | undefined;
  bankName?: string | null | undefined;
  fingerprint?: string | null | undefined;
  refundAccountHolderName?: string | null | undefined;
  refundAccountHolderType?: string | null | undefined;
  refundRoutingNumber?: string | null | undefined;
  routingNumber?: string | null | undefined;
  swiftCode?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeAchCreditTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeAchCreditTransfer = {
  account_number?: string | null | undefined;
  bank_name?: string | null | undefined;
  fingerprint?: string | null | undefined;
  refund_account_holder_name?: string | null | undefined;
  refund_account_holder_type?: string | null | undefined;
  refund_routing_number?: string | null | undefined;
  routing_number?: string | null | undefined;
  swift_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeAchCreditTransfer
 */
const SchemaIn$SourceTypeAchCreditTransfer: z.ZodType<
  SourceTypeAchCreditTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    refund_account_holder_name: z.string().nullable().optional(),
    refund_account_holder_type: z.string().nullable().optional(),
    refund_routing_number: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
    swift_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number: "accountNumber",
      bank_name: "bankName",
      fingerprint: "fingerprint",
      refund_account_holder_name: "refundAccountHolderName",
      refund_account_holder_type: "refundAccountHolderType",
      refund_routing_number: "refundRoutingNumber",
      routing_number: "routingNumber",
      swift_code: "swiftCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeAchCreditTransfer
 */
const SchemaOut$SourceTypeAchCreditTransfer: z.ZodType<
  External$SourceTypeAchCreditTransfer, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeAchCreditTransfer // the object to be transformed
> = z
  .object({
    accountNumber: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    refundAccountHolderName: z.string().nullable().optional(),
    refundAccountHolderType: z.string().nullable().optional(),
    refundRoutingNumber: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
    swiftCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumber: "account_number",
      bankName: "bank_name",
      fingerprint: "fingerprint",
      refundAccountHolderName: "refund_account_holder_name",
      refundAccountHolderType: "refund_account_holder_type",
      refundRoutingNumber: "refund_routing_number",
      routingNumber: "routing_number",
      swiftCode: "swift_code",
    });
  });

export const Schemas$SourceTypeAchCreditTransfer = {
  in: SchemaIn$SourceTypeAchCreditTransfer,
  out: SchemaOut$SourceTypeAchCreditTransfer,
};
