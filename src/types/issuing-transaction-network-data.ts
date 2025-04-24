import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionNetworkData = {
  /**
   * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
   */
  authorizationCode?: string | null | undefined;
  /**
   * The date the transaction was processed by the card network. This can be different from the date the seller recorded the transaction depending on when the acquirer submits the transaction to the network.
   */
  processingDate?: string | null | undefined;
  /**
   * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
   */
  transactionId?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionNetworkData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionNetworkData = {
  authorization_code?: string | null | undefined;
  processing_date?: string | null | undefined;
  transaction_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionNetworkData
 */
const SchemaIn$IssuingTransactionNetworkData: z.ZodType<
  IssuingTransactionNetworkData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorization_code: z.string().nullable().optional(),
    processing_date: z.string().nullable().optional(),
    transaction_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorization_code: "authorizationCode",
      processing_date: "processingDate",
      transaction_id: "transactionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionNetworkData
 */
const SchemaOut$IssuingTransactionNetworkData: z.ZodType<
  External$IssuingTransactionNetworkData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionNetworkData // the object to be transformed
> = z
  .object({
    authorizationCode: z.string().nullable().optional(),
    processingDate: z.string().nullable().optional(),
    transactionId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizationCode: "authorization_code",
      processingDate: "processing_date",
      transactionId: "transaction_id",
    });
  });

export const Schemas$IssuingTransactionNetworkData = {
  in: SchemaIn$IssuingTransactionNetworkData,
  out: SchemaOut$IssuingTransactionNetworkData,
};
