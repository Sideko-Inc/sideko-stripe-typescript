import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingNetworkTokenVisa = {
  /**
   * A unique reference ID from Visa to represent the card account number.
   */
  cardReferenceId: string;
  /**
   * The network-unique identifier for the token.
   */
  tokenReferenceId: string;
  /**
   * The ID of the entity requesting tokenization, specific to Visa.
   */
  tokenRequestorId: string;
  /**
   * Degree of risk associated with the token between `01` and `99`, with higher number indicating higher risk. A `00` value indicates the token was not scored by Visa.
   */
  tokenRiskScore?: string | undefined;
};

/**
 * @internal
 * IssuingNetworkTokenVisa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingNetworkTokenVisa = {
  card_reference_id: string;
  token_reference_id: string;
  token_requestor_id: string;
  token_risk_score?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingNetworkTokenVisa
 */
const SchemaIn$IssuingNetworkTokenVisa: z.ZodType<
  IssuingNetworkTokenVisa, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_reference_id: z.string(),
    token_reference_id: z.string(),
    token_requestor_id: z.string(),
    token_risk_score: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_reference_id: "cardReferenceId",
      token_reference_id: "tokenReferenceId",
      token_requestor_id: "tokenRequestorId",
      token_risk_score: "tokenRiskScore",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingNetworkTokenVisa
 */
const SchemaOut$IssuingNetworkTokenVisa: z.ZodType<
  External$IssuingNetworkTokenVisa, // output type of this zod object
  z.ZodTypeDef,
  IssuingNetworkTokenVisa // the object to be transformed
> = z
  .object({
    cardReferenceId: z.string(),
    tokenReferenceId: z.string(),
    tokenRequestorId: z.string(),
    tokenRiskScore: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardReferenceId: "card_reference_id",
      tokenReferenceId: "token_reference_id",
      tokenRequestorId: "token_requestor_id",
      tokenRiskScore: "token_risk_score",
    });
  });

export const Schemas$IssuingNetworkTokenVisa = {
  in: SchemaIn$IssuingNetworkTokenVisa,
  out: SchemaOut$IssuingNetworkTokenVisa,
};
