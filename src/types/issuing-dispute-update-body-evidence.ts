import {
  External$IssuingDisputeUpdateBodyEvidenceCanceledObj0,
  IssuingDisputeUpdateBodyEvidenceCanceledObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceCanceledObj0,
} from "./issuing-dispute-update-body-evidence-canceled-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceDuplicateObj0,
  IssuingDisputeUpdateBodyEvidenceDuplicateObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceDuplicateObj0,
} from "./issuing-dispute-update-body-evidence-duplicate-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceFraudulentObj0,
  IssuingDisputeUpdateBodyEvidenceFraudulentObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceFraudulentObj0,
} from "./issuing-dispute-update-body-evidence-fraudulent-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0,
  IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0,
} from "./issuing-dispute-update-body-evidence-merchandise-not-as-described-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0,
  IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0,
} from "./issuing-dispute-update-body-evidence-no-valid-authorization-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0,
  IssuingDisputeUpdateBodyEvidenceNotReceivedObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0,
} from "./issuing-dispute-update-body-evidence-not-received-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceOtherObj0,
  IssuingDisputeUpdateBodyEvidenceOtherObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceOtherObj0,
} from "./issuing-dispute-update-body-evidence-other-obj0";
import {
  External$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0,
  IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0,
  Schemas$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0,
} from "./issuing-dispute-update-body-evidence-service-not-as-described-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Evidence provided for the dispute.
 */
export type IssuingDisputeUpdateBodyEvidence = {
  canceled?:
    | (IssuingDisputeUpdateBodyEvidenceCanceledObj0 | string)
    | undefined;
  duplicate?:
    | (IssuingDisputeUpdateBodyEvidenceDuplicateObj0 | string)
    | undefined;
  fraudulent?:
    | (IssuingDisputeUpdateBodyEvidenceFraudulentObj0 | string)
    | undefined;
  merchandiseNotAsDescribed?:
    | (IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0 | string)
    | undefined;
  noValidAuthorization?:
    | (IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0 | string)
    | undefined;
  notReceived?:
    | (IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 | string)
    | undefined;
  other?: (IssuingDisputeUpdateBodyEvidenceOtherObj0 | string) | undefined;
  reason?:
    | (
        | "canceled"
        | "duplicate"
        | "fraudulent"
        | "merchandise_not_as_described"
        | "no_valid_authorization"
        | "not_received"
        | "other"
        | "service_not_as_described"
      )
    | undefined;
  serviceNotAsDescribed?:
    | (IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0 | string)
    | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyEvidence = {
  canceled?:
    | (External$IssuingDisputeUpdateBodyEvidenceCanceledObj0 | string)
    | undefined;
  duplicate?:
    | (External$IssuingDisputeUpdateBodyEvidenceDuplicateObj0 | string)
    | undefined;
  fraudulent?:
    | (External$IssuingDisputeUpdateBodyEvidenceFraudulentObj0 | string)
    | undefined;
  merchandise_not_as_described?:
    | (
        | External$IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0
        | string
      )
    | undefined;
  no_valid_authorization?:
    | (
        | External$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0
        | string
      )
    | undefined;
  not_received?:
    | (External$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 | string)
    | undefined;
  other?:
    | (External$IssuingDisputeUpdateBodyEvidenceOtherObj0 | string)
    | undefined;
  reason?:
    | (
        | "canceled"
        | "duplicate"
        | "fraudulent"
        | "merchandise_not_as_described"
        | "no_valid_authorization"
        | "not_received"
        | "other"
        | "service_not_as_described"
      )
    | undefined;
  service_not_as_described?:
    | (
        | External$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyEvidence
 */
const SchemaIn$IssuingDisputeUpdateBodyEvidence: z.ZodType<
  IssuingDisputeUpdateBodyEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    canceled: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceCanceledObj0.in,
        z.string(),
      ])
      .optional(),
    duplicate: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceDuplicateObj0.in,
        z.string(),
      ])
      .optional(),
    fraudulent: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceFraudulentObj0.in,
        z.string(),
      ])
      .optional(),
    merchandise_not_as_described: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0.in,
        z.string(),
      ])
      .optional(),
    no_valid_authorization: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0.in,
        z.string(),
      ])
      .optional(),
    not_received: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0.in,
        z.string(),
      ])
      .optional(),
    other: z
      .union([Schemas$IssuingDisputeUpdateBodyEvidenceOtherObj0.in, z.string()])
      .optional(),
    reason: z
      .enum([
        "canceled",
        "duplicate",
        "fraudulent",
        "merchandise_not_as_described",
        "no_valid_authorization",
        "not_received",
        "other",
        "service_not_as_described",
      ])
      .optional(),
    service_not_as_described: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled: "canceled",
      duplicate: "duplicate",
      fraudulent: "fraudulent",
      merchandise_not_as_described: "merchandiseNotAsDescribed",
      no_valid_authorization: "noValidAuthorization",
      not_received: "notReceived",
      other: "other",
      reason: "reason",
      service_not_as_described: "serviceNotAsDescribed",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyEvidence
 */
const SchemaOut$IssuingDisputeUpdateBodyEvidence: z.ZodType<
  External$IssuingDisputeUpdateBodyEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyEvidence // the object to be transformed
> = z
  .object({
    canceled: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceCanceledObj0.out,
        z.string(),
      ])
      .optional(),
    duplicate: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceDuplicateObj0.out,
        z.string(),
      ])
      .optional(),
    fraudulent: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceFraudulentObj0.out,
        z.string(),
      ])
      .optional(),
    merchandiseNotAsDescribed: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceMerchandiseNotAsDescribedObj0.out,
        z.string(),
      ])
      .optional(),
    noValidAuthorization: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0.out,
        z.string(),
      ])
      .optional(),
    notReceived: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0.out,
        z.string(),
      ])
      .optional(),
    other: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceOtherObj0.out,
        z.string(),
      ])
      .optional(),
    reason: z
      .enum([
        "canceled",
        "duplicate",
        "fraudulent",
        "merchandise_not_as_described",
        "no_valid_authorization",
        "not_received",
        "other",
        "service_not_as_described",
      ])
      .optional(),
    serviceNotAsDescribed: z
      .union([
        Schemas$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled: "canceled",
      duplicate: "duplicate",
      fraudulent: "fraudulent",
      merchandiseNotAsDescribed: "merchandise_not_as_described",
      noValidAuthorization: "no_valid_authorization",
      notReceived: "not_received",
      other: "other",
      reason: "reason",
      serviceNotAsDescribed: "service_not_as_described",
    });
  });

export const Schemas$IssuingDisputeUpdateBodyEvidence = {
  in: SchemaIn$IssuingDisputeUpdateBodyEvidence,
  out: SchemaOut$IssuingDisputeUpdateBodyEvidence,
};
