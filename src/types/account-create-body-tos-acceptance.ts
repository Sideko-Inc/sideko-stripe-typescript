import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
 */
export type AccountCreateBodyTosAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  serviceAgreement?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyTosAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyTosAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  service_agreement?: string | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyTosAcceptance
 */
const SchemaIn$AccountCreateBodyTosAcceptance: z.ZodType<
  AccountCreateBodyTosAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    service_agreement: z.string().optional(),
    user_agent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      service_agreement: "serviceAgreement",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyTosAcceptance
 */
const SchemaOut$AccountCreateBodyTosAcceptance: z.ZodType<
  External$AccountCreateBodyTosAcceptance, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyTosAcceptance // the object to be transformed
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    serviceAgreement: z.string().optional(),
    userAgent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      serviceAgreement: "service_agreement",
      userAgent: "user_agent",
    });
  });

export const Schemas$AccountCreateBodyTosAcceptance = {
  in: SchemaIn$AccountCreateBodyTosAcceptance,
  out: SchemaOut$AccountCreateBodyTosAcceptance,
};
