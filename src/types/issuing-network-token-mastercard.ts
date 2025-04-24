import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingNetworkTokenMastercard = {
  /**
   * A unique reference ID from MasterCard to represent the card account number.
   */
  cardReferenceId?: string | undefined;
  /**
   * The network-unique identifier for the token.
   */
  tokenReferenceId: string;
  /**
   * The ID of the entity requesting tokenization, specific to MasterCard.
   */
  tokenRequestorId: string;
  /**
   * The name of the entity requesting tokenization, if known. This is directly provided from MasterCard.
   */
  tokenRequestorName?: string | undefined;
};

/**
 * @internal
 * IssuingNetworkTokenMastercard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingNetworkTokenMastercard = {
  card_reference_id?: string | undefined;
  token_reference_id: string;
  token_requestor_id: string;
  token_requestor_name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingNetworkTokenMastercard
 */
const SchemaIn$IssuingNetworkTokenMastercard: z.ZodType<
  IssuingNetworkTokenMastercard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_reference_id: z.string().optional(),
    token_reference_id: z.string(),
    token_requestor_id: z.string(),
    token_requestor_name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_reference_id: "cardReferenceId",
      token_reference_id: "tokenReferenceId",
      token_requestor_id: "tokenRequestorId",
      token_requestor_name: "tokenRequestorName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingNetworkTokenMastercard
 */
const SchemaOut$IssuingNetworkTokenMastercard: z.ZodType<
  External$IssuingNetworkTokenMastercard, // output type of this zod object
  z.ZodTypeDef,
  IssuingNetworkTokenMastercard // the object to be transformed
> = z
  .object({
    cardReferenceId: z.string().optional(),
    tokenReferenceId: z.string(),
    tokenRequestorId: z.string(),
    tokenRequestorName: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardReferenceId: "card_reference_id",
      tokenReferenceId: "token_reference_id",
      tokenRequestorId: "token_requestor_id",
      tokenRequestorName: "token_requestor_name",
    });
  });

export const Schemas$IssuingNetworkTokenMastercard = {
  in: SchemaIn$IssuingNetworkTokenMastercard,
  out: SchemaOut$IssuingNetworkTokenMastercard,
};
