import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceTransactionChfCreditTransferData = {
  /**
   * Reference associated with the transfer.
   */
  reference?: string | undefined;
  /**
   * Sender's country address.
   */
  senderAddressCountry?: string | undefined;
  /**
   * Sender's line 1 address.
   */
  senderAddressLine1?: string | undefined;
  /**
   * Sender's bank account IBAN.
   */
  senderIban?: string | undefined;
  /**
   * Sender's name.
   */
  senderName?: string | undefined;
};

/**
 * @internal
 * SourceTransactionChfCreditTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTransactionChfCreditTransferData = {
  reference?: string | undefined;
  sender_address_country?: string | undefined;
  sender_address_line1?: string | undefined;
  sender_iban?: string | undefined;
  sender_name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTransactionChfCreditTransferData
 */
const SchemaIn$SourceTransactionChfCreditTransferData: z.ZodType<
  SourceTransactionChfCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().optional(),
    sender_address_country: z.string().optional(),
    sender_address_line1: z.string().optional(),
    sender_iban: z.string().optional(),
    sender_name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      sender_address_country: "senderAddressCountry",
      sender_address_line1: "senderAddressLine1",
      sender_iban: "senderIban",
      sender_name: "senderName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTransactionChfCreditTransferData
 */
const SchemaOut$SourceTransactionChfCreditTransferData: z.ZodType<
  External$SourceTransactionChfCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  SourceTransactionChfCreditTransferData // the object to be transformed
> = z
  .object({
    reference: z.string().optional(),
    senderAddressCountry: z.string().optional(),
    senderAddressLine1: z.string().optional(),
    senderIban: z.string().optional(),
    senderName: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      senderAddressCountry: "sender_address_country",
      senderAddressLine1: "sender_address_line1",
      senderIban: "sender_iban",
      senderName: "sender_name",
    });
  });

export const Schemas$SourceTransactionChfCreditTransferData = {
  in: SchemaIn$SourceTransactionChfCreditTransferData,
  out: SchemaOut$SourceTransactionChfCreditTransferData,
};
