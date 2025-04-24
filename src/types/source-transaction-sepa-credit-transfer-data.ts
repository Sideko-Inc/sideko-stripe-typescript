import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceTransactionSepaCreditTransferData = {
  /**
   * Reference associated with the transfer.
   */
  reference?: string | undefined;
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
 * SourceTransactionSepaCreditTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTransactionSepaCreditTransferData = {
  reference?: string | undefined;
  sender_iban?: string | undefined;
  sender_name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTransactionSepaCreditTransferData
 */
const SchemaIn$SourceTransactionSepaCreditTransferData: z.ZodType<
  SourceTransactionSepaCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().optional(),
    sender_iban: z.string().optional(),
    sender_name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      sender_iban: "senderIban",
      sender_name: "senderName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTransactionSepaCreditTransferData
 */
const SchemaOut$SourceTransactionSepaCreditTransferData: z.ZodType<
  External$SourceTransactionSepaCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  SourceTransactionSepaCreditTransferData // the object to be transformed
> = z
  .object({
    reference: z.string().optional(),
    senderIban: z.string().optional(),
    senderName: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      senderIban: "sender_iban",
      senderName: "sender_name",
    });
  });

export const Schemas$SourceTransactionSepaCreditTransferData = {
  in: SchemaIn$SourceTransactionSepaCreditTransferData,
  out: SchemaOut$SourceTransactionSepaCreditTransferData,
};
