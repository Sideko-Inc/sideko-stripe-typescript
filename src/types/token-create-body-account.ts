import {
  External$TokenCreateBodyAccountCompany,
  Schemas$TokenCreateBodyAccountCompany,
  TokenCreateBodyAccountCompany,
} from "./token-create-body-account-company";
import {
  External$TokenCreateBodyAccountIndividual,
  Schemas$TokenCreateBodyAccountIndividual,
  TokenCreateBodyAccountIndividual,
} from "./token-create-body-account-individual";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information for the account this token represents.
 */
export type TokenCreateBodyAccount = {
  businessType?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  company?: TokenCreateBodyAccountCompany | undefined;
  individual?: TokenCreateBodyAccountIndividual | undefined;
  tosShownAndAccepted?: boolean | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccount = {
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  company?: External$TokenCreateBodyAccountCompany | undefined;
  individual?: External$TokenCreateBodyAccountIndividual | undefined;
  tos_shown_and_accepted?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccount
 */
const SchemaIn$TokenCreateBodyAccount: z.ZodType<
  TokenCreateBodyAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    business_type: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    company: Schemas$TokenCreateBodyAccountCompany.in.optional(),
    individual: Schemas$TokenCreateBodyAccountIndividual.in.optional(),
    tos_shown_and_accepted: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      business_type: "businessType",
      company: "company",
      individual: "individual",
      tos_shown_and_accepted: "tosShownAndAccepted",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccount
 */
const SchemaOut$TokenCreateBodyAccount: z.ZodType<
  External$TokenCreateBodyAccount, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccount // the object to be transformed
> = z
  .object({
    businessType: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    company: Schemas$TokenCreateBodyAccountCompany.out.optional(),
    individual: Schemas$TokenCreateBodyAccountIndividual.out.optional(),
    tosShownAndAccepted: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      businessType: "business_type",
      company: "company",
      individual: "individual",
      tosShownAndAccepted: "tos_shown_and_accepted",
    });
  });

export const Schemas$TokenCreateBodyAccount = {
  in: SchemaIn$TokenCreateBodyAccount,
  out: SchemaOut$TokenCreateBodyAccount,
};
