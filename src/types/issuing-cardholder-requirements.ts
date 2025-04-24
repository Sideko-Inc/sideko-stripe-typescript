import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderRequirements = {
  /**
   * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
   */
  disabledReason?:
    | ("listed" | "rejected.listed" | "requirements.past_due" | "under_review")
    | null
    | undefined;
  /**
   * Array of fields that need to be collected in order to verify and re-enable the cardholder.
   */
  pastDue?:
    | (
        | "company.tax_id"
        | "individual.card_issuing.user_terms_acceptance.date"
        | "individual.card_issuing.user_terms_acceptance.ip"
        | "individual.dob.day"
        | "individual.dob.month"
        | "individual.dob.year"
        | "individual.first_name"
        | "individual.last_name"
        | "individual.verification.document"
      )[]
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardholderRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderRequirements = {
  disabled_reason?:
    | ("listed" | "rejected.listed" | "requirements.past_due" | "under_review")
    | null
    | undefined;
  past_due?:
    | (
        | "company.tax_id"
        | "individual.card_issuing.user_terms_acceptance.date"
        | "individual.card_issuing.user_terms_acceptance.ip"
        | "individual.dob.day"
        | "individual.dob.month"
        | "individual.dob.year"
        | "individual.first_name"
        | "individual.last_name"
        | "individual.verification.document"
      )[]
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderRequirements
 */
const SchemaIn$IssuingCardholderRequirements: z.ZodType<
  IssuingCardholderRequirements, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disabled_reason: z
      .enum([
        "listed",
        "rejected.listed",
        "requirements.past_due",
        "under_review",
      ])
      .nullable()
      .optional(),
    past_due: z
      .array(
        z.enum([
          "company.tax_id",
          "individual.card_issuing.user_terms_acceptance.date",
          "individual.card_issuing.user_terms_acceptance.ip",
          "individual.dob.day",
          "individual.dob.month",
          "individual.dob.year",
          "individual.first_name",
          "individual.last_name",
          "individual.verification.document",
        ]),
      )
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabled_reason: "disabledReason",
      past_due: "pastDue",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderRequirements
 */
const SchemaOut$IssuingCardholderRequirements: z.ZodType<
  External$IssuingCardholderRequirements, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderRequirements // the object to be transformed
> = z
  .object({
    disabledReason: z
      .enum([
        "listed",
        "rejected.listed",
        "requirements.past_due",
        "under_review",
      ])
      .nullable()
      .optional(),
    pastDue: z
      .array(
        z.enum([
          "company.tax_id",
          "individual.card_issuing.user_terms_acceptance.date",
          "individual.card_issuing.user_terms_acceptance.ip",
          "individual.dob.day",
          "individual.dob.month",
          "individual.dob.year",
          "individual.first_name",
          "individual.last_name",
          "individual.verification.document",
        ]),
      )
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabledReason: "disabled_reason",
      pastDue: "past_due",
    });
  });

export const Schemas$IssuingCardholderRequirements = {
  in: SchemaIn$IssuingCardholderRequirements,
  out: SchemaOut$IssuingCardholderRequirements,
};
