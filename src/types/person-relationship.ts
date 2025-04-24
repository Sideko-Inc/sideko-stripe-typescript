import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PersonRelationship = {
  /**
   * Whether the person is the authorizer of the account's representative.
   */
  authorizer?: boolean | null | undefined;
  /**
   * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
   */
  director?: boolean | null | undefined;
  /**
   * Whether the person has significant responsibility to control, manage, or direct the organization.
   */
  executive?: boolean | null | undefined;
  /**
   * Whether the person is the legal guardian of the account's representative.
   */
  legalGuardian?: boolean | null | undefined;
  /**
   * Whether the person is an owner of the account’s legal entity.
   */
  owner?: boolean | null | undefined;
  /**
   * The percent owned by the person of the account's legal entity.
   */
  percentOwnership?: number | null | undefined;
  /**
   * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
   */
  representative?: boolean | null | undefined;
  /**
   * The person's title (e.g., CEO, Support Engineer).
   */
  title?: string | null | undefined;
};

/**
 * @internal
 * PersonRelationship without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PersonRelationship = {
  authorizer?: boolean | null | undefined;
  director?: boolean | null | undefined;
  executive?: boolean | null | undefined;
  legal_guardian?: boolean | null | undefined;
  owner?: boolean | null | undefined;
  percent_ownership?: number | null | undefined;
  representative?: boolean | null | undefined;
  title?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PersonRelationship
 */
const SchemaIn$PersonRelationship: z.ZodType<
  PersonRelationship, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizer: z.boolean().nullable().optional(),
    director: z.boolean().nullable().optional(),
    executive: z.boolean().nullable().optional(),
    legal_guardian: z.boolean().nullable().optional(),
    owner: z.boolean().nullable().optional(),
    percent_ownership: z.number().nullable().optional(),
    representative: z.boolean().nullable().optional(),
    title: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizer: "authorizer",
      director: "director",
      executive: "executive",
      legal_guardian: "legalGuardian",
      owner: "owner",
      percent_ownership: "percentOwnership",
      representative: "representative",
      title: "title",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PersonRelationship
 */
const SchemaOut$PersonRelationship: z.ZodType<
  External$PersonRelationship, // output type of this zod object
  z.ZodTypeDef,
  PersonRelationship // the object to be transformed
> = z
  .object({
    authorizer: z.boolean().nullable().optional(),
    director: z.boolean().nullable().optional(),
    executive: z.boolean().nullable().optional(),
    legalGuardian: z.boolean().nullable().optional(),
    owner: z.boolean().nullable().optional(),
    percentOwnership: z.number().nullable().optional(),
    representative: z.boolean().nullable().optional(),
    title: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizer: "authorizer",
      director: "director",
      executive: "executive",
      legalGuardian: "legal_guardian",
      owner: "owner",
      percentOwnership: "percent_ownership",
      representative: "representative",
      title: "title",
    });
  });

export const Schemas$PersonRelationship = {
  in: SchemaIn$PersonRelationship,
  out: SchemaOut$PersonRelationship,
};
